import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import TextareaAutosize from "react-textarea-autosize";
import * as Loader from "react-loader-spinner";

const Home = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let openai;
    try {
      const configuration = new Configuration({
        apiKey: "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",
      });
      openai = new OpenAIApi(configuration);
    } catch (error) {
      console.log("error:", error.message);
    }

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      })
      .then((response) => {
        setResponse(response.data.choices[0].message.content);
        setLoader(false);
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  let output_response;
  if (!response) {
    // loader = True
    output_response = (
      <p
        className="small p-2 ms-3 mb-1 rounded-3"
        style={{
          backgroundColor: "#444654",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        How can I assist you?
      </p>
    );
  } else {
    // loader = False
    output_response = (
      <p
        className="small p-2 ms-3 mb-1 rounded-3"
        style={{
          backgroundColor: "#444654",
          color: "white",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
      >
        {response}
      </p>
    );
  }

  var d = new Date();
  var [date, setDate] = useState(d.toLocaleTimeString());

  if (loader) {
    return (
      <>
        <section
          style={{
            backgroundImage: `linear-gradient(to left, #eeaeca, #94bbe9)`,
            minHeight: "100vh",
          }}
        >
          <div className="container py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div
                  className="card"
                  id="chat2"
                  style={{
                    backgroundImage: `linear-gradient(to left, #BE8BA2 , #94bbe9)`,
                    marginTop: "5vh",
                    borderRadius: "8px",
                  }}
                >
                  <div className="card-header d-flex justify-content-between align-items-center p-3">
                    <h5 className="mb-0">Chating</h5>
                    <button
                      type="button"
                      onClick={refreshPage}
                      className="btn btn-primary btn-sm"
                      data-mdb-ripple-color="dark"
                      style={{ fontWeight: "bold" }}
                    >
                      Chating AI Tool
                    </button>
                  </div>
                  <div
                    className="card-body"
                    data-mdb-perfect-scrollbar="true"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <Loader.TailSpin color="red" />
                    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                      <div>
                        <TextareaAutosize
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          style={{ position: "absolute", right: "100px" }}
                        />{" "}
                        <br /> <br />
                        <p
                          className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end"
                          style={{ color: "#F9EEEC" }}
                        >
                          {date}
                        </p>
                        <button
                          onClick={handleSubmit}
                          style={{
                            backgroundColor: "#eeaeca",
                            borderRadius: "5px",
                            position: "absolute",
                            right: "10px",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section
          style={{
            backgroundImage: `linear-gradient(to left, #eeaeca, #94bbe9)`,
            minHeight: "100vh",
          }}
        >
          <div className="container py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div
                  className="card"
                  id="chat2"
                  style={{
                    backgroundImage: `linear-gradient(to left, #BE8BA2 , #94bbe9)`,
                    marginTop: "5vh",
                    borderRadius: "8px",
                  }}
                >
                  <div className="card-header d-flex justify-content-between align-items-center p-3">
                    <h5 className="mb-0">Chat</h5>
                    <button
                      type="button"
                      onClick={refreshPage}
                      className="btn btn-primary btn-sm"
                      data-mdb-ripple-color="dark"
                      style={{ fontWeight: "bold" }}
                    >
                      Chating AI Tool
                    </button>
                  </div>
                  <div
                    className="card-body"
                    data-mdb-perfect-scrollbar="true"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div>
                        {output_response}
                        <p
                          className="small ms-3 mb-3 rounded-3 text-muted"
                          style={{ color: "#F9EEEC" }}
                        >
                          {date}
                        </p>
                      </div>
                    </div>
                    <div className="divider d-flex align-items-center mb-4">
                      <p
                        className="text-center mx-3 mb-0"
                        style={{ color: "#F9EEEC" }}
                      >
                        Today
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                      <div>
                        <TextareaAutosize
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          style={{ position: "absolute", right: "100px" }}
                        />{" "}
                        <br /> <br />
                        {/* <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} style={{backgroundColor:"#F9EEEC", borderRadius: "5px",position:"relative", overflow:"auto", height:"auto",  }} /> */}
                        <p
                          className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end"
                          style={{ color: "#F9EEEC" }}
                        >
                          {date}
                        </p>
                        <button
                          onClick={handleSubmit}
                          style={{
                            backgroundColor: "#eeaeca",
                            borderRadius: "5px",
                            position: "absolute",
                            right: "10px",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Home;
