function Loader() {
    return (
      <div
        className="text-center d-flex align-items-center justify-content-center"
        style={{ height: "50vh" }}
      >
        <MDBSpinner className="mx-2" color="secondary">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  }



  export default {
    Loader
  }