import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import "./styles.css";

import arabic from "./state/ar.localize.json";
import english from "./state/en.localize.json";

import LoginPage from "pages/LoginPage";
import HomePage from "pages/HomePage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";

import { orderHistory, account, home, orderDetails } from "./state/routes";

const onMissingTranslation = ({ translationId, languageCode }) => {
  return `Nada for ${translationId} - ${languageCode}`;
};

const App = ({
  router,
  alert,
  user,
  languages,
  addTranslationForLanguage,
  initialize,
  activeLanguage
}) => {
  console.log(languages);
  console.log(initialize);

  const [loadLangFlag, setloadLangFlag] = useState(1);

  useEffect(() => {
    console.log(`L = ${loadLangFlag}`);
    initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Arabic", code: "ar" }
      ],
      //translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
    addTranslationForLanguage(arabic, "ar");
    addTranslationForLanguage(english, "en");
  }, [loadLangFlag]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Translate id="searchbox">Jurassic Park</Translate>
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        <Route exact path={home} component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  router: state.router,
  alert: state.alert,
  user: state.user
});
export default withLocalize(withRouter(connect(mapStateToProps)(App)));
