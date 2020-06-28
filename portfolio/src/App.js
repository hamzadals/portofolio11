import React, { Component } from "react";
import "./styles.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header title="Title" scroll>
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}
export default App;
