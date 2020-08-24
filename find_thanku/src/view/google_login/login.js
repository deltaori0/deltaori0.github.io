import GoogleLogin from "react-google-login";

const G_Login = (props) => {
  const { onLoginGoogle } = props;
  return (
    <div className={cx("login")}>
      <GoogleLogin
        clientId="google-login-key"
        render={(props) => <div onClick={props.onClick} />}
        onSuccess={(result) => onLoginGoogle(result)}
        onFailure={(result) => console.log(result)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default G_Login;
