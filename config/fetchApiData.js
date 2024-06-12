import { SetMyCartData } from "@/app/_redux/reducer";
import { api, callAPI } from "../ApiWrapper/apiWrapper";
import { apiUrls } from "./apiUrls";

export const makeSearchString = (filter = {}) => {
  const searchParams = new URLSearchParams();
  for (const key in filter) {
    if (filter[key]) {
      searchParams.append(key, filter[key]);
    }
  }
  return searchParams?.toString();
};

export const fetchTeamDetailsData =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      let url = `${apiUrls.getTeam}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "POST",
        body: { ...body },
      });
      console.log(data, "LLLLLMMMMM");
      return data;
    } catch (error) {
      console.log(error, "LLLLLMMMMM");
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };

export const fetchAllTeamData =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      let url = `${apiUrls.getTeam}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "POST",
        body: { ...body },
      });
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };

export const fetchMyCartData =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      let url = `${apiUrls.getCardData}/lists`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "POST",
        body: { ...body },
      });
      console.log(data);
      if (data.status === true) {
        dispatch(SetMyCartData(data?.data));
      } else {
        dispatch(SetMyCartData([]));
      }
      return data;
    } catch (error) {
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };

export const fetchAvailability =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      let url = `${apiUrls.checkAvailability}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "POST",
        body: { ...body },
      });

      return data;
    } catch (error) {
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };
export const calculateServiceFee = (ticket) => {
  let item = ticket?.collection_Id;
  let price = 0;
  let serviceFeeRate = (item?.service_fee || 0) / 100;
  price = item?.sellingPrice * serviceFeeRate;
  return price;
};

export const calculateTaxAmount = (ticket) => {
  let item = ticket?.collection_Id;
  let price = 0;
  let taxRate = item?.tax / 100;
  price = item?.sellingPrice * taxRate;
  return price;
};

export const checkCartCurrency = (ticket) => {
  let status;
  if (cartData.length) {
    cartData?.forEach((element) => {
      if (
        element?.product_id?.sellingCurrency ===
        ticket?.collection_Id?.sellingCurrency
      ) {
        status = true;
      } else {
        status = false;
      }
    });
  } else {
    status = true;
  }
  return status;
};

export const fetchAddToCart =
  (userId = "", ticketData = {}, productData = [], body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      console.log(
        ticketData?.collection_Id?.product_type,
        "SSSSSSSSS",
        ticketData?.collection_Id?.sellingPrice
      );
      let chekForReg = ticketData?.collection_Id?.product_type;
      let amount_breakdown = [];
      if (
        ticketData?.collection_Id?.sellingCurrency != "MVP" &&
        ticketData?.collection_Id?.sellingCurrency != "TIX" &&
        ticketData?.collection_Id?.sellingPrice
      ) {
        let obj = {
          price: ticketData?.collection_Id?.sellingPrice,
          currency: ticketData?.collection_Id?.sellingCurrency,
          tax_amount: calculateTaxAmount(),
          service_fee_amount: calculateServiceFee(),
          transaction_fee_amount: 0,
          network_fee_amount: 0,
          network_fee_currency: "",
          coupon_id: null,
          discount_amount: 0,
          exchange: [
            {
              rate: "1.2",
              pair: "USD/EUR",
            },
          ],
        };
        amount_breakdown.push(obj);
      }

      if (ticketData?.collection_Id?.allowRewards) {
        let mvpObj = {
          price: ticketData?.collection_Id?.allowRewards * 1,
          currency: ticketData?.collection_Id?.allowRewardsCurrency,
          tax_amount: 0,
          service_fee_amount: 0,
          transaction_fee_amount: 0,
          network_fee_amount: 0,
          network_fee_currency: "",
          coupon_id: null,
          discount_amount: 0,
          exchange: [
            {
              rate: "1.2",
              pair: "USD/EUR",
            },
          ],
        };
        amount_breakdown.push(mvpObj);
      }
      let statusKey = "ACTIVE";
      if (
        chekForReg == "REGISTRATION" &&
        ticketData?.collection_Id?.sellingPrice == 0
      ) {
        statusKey = "DIRECT";
      }
      let payload = {
        userId: userId,
        limit: 50,
        offset: 1,
        status: statusKey,
        type: ticketData?.collection_Id?.type,
        product_id: ticketData?.collection_Id?._id,
        buyer: { _id: userId, walletAddress: "" },
        listing_id: ticketData?._id,
        sellingPrice: ticketData?.collection_Id?.sellingPrice,
        seller: {
          _id: ticketData?.collection_Id?.seller_id,
        },
        total_quantity: 1,
        free_quantity: 0,
        total_amount: ticketData?.collection_Id?.sellingPrice,
        billingAddress: "64f5d6f417a0b8b7ae704362",
        shippingAddress: "64f5d6f417a0b8b7ae704362",
        amount_breakdown: amount_breakdown,
        product_attributes: productData ?? [],
      };

      let url = `${apiUrls.getCardData}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "POST",
        body: { ...body, ...payload },
      });
      return data;
    } catch (error) {
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };

export const fetchVerifyCaptcha =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      let url = `${apiUrls.captchaVerify}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "POST",
        body: { ...body },
      });

      return data;
    } catch (error) {
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };

export const fetchMyPurchase =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      //   dispatch(SetloaderData(true));
      let url = `${apiUrls.transaction}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "GET",
      });

      return data;
    } catch (error) {
      throw error;
    } finally {
      //   dispatch(SetloaderData(false));
    }
  };

export const fetchAllTeamDataBackend = async (body = {}, query = {}) => {
  try {
    //   dispatch(SetloaderData(true));
    let url = `${apiUrls.getTeam}`;
    if (query) {
      const searchString = makeSearchString(query);
      url = searchString ? `${url}?${searchString}` : url;
    }
    const data = await callAPI({
      url: url,
      method: "POST",
      body: { ...body },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  } finally {
    //   dispatch(SetloaderData(false));
  }
};

export const fetchFaqListing =
  (body = {}, query = {}) =>
  async (dispatch) => {
    try {
      let url = `${apiUrls.faq}`;
      if (query) {
        const searchString = makeSearchString(query);
        url = searchString ? `${url}?${searchString}` : url;
      }
      const data = await callAPI({
        url: url,
        method: "GET",
      });

      return data;
    } catch (error) {
      throw error;
    } finally {
    }
  };
