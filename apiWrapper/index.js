

export const ADMINAPI = async ({
    body,
    headers = {},
    method,
    signal,
    url,
    formData = false,
    type,
    dispatch,
  }) => {
    let token;
    let accesstoken;
    let roleId;
    console.log("with client");
    
  
    console.log("accestoken", accesstoken);
  
    console.log(accesstoken, "adminaccesstoken===> 123");
    headers["Token"] = `${token}`;
    headers["Accesstoken"] = `${accesstoken}`;
    headers["roleId"] = `${roleId}`;
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Authorization"] = `Bearer ${token}`;
    headers["version"] = 2.0;
    if (!formData) {
      headers["content-type"] = "application/json";
    }
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? (formData ? body : JSON.stringify(body)) : null,
        signal,
        cache: "no-store",
      });
      const responseData = await response.json();
    console.log(responseData,"TTTT");
      if (!response.ok) {
        throw responseData;
      }
    
      return responseData;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };