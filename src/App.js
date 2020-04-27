import React from "react";
import { connect } from "react-redux";
import { auth, createUser } from "./firebase/firebase.utils";
import { setCurrentUserActionCreator } from "./redux/user/user.action";
import Router from "./router/router.component";
import Header from "./components/header/header.component";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: userRef.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserActionCreator(user)),
});

export default connect(null, mapDispatchToProps)(App);
