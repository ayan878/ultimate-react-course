
function CloseAccount() {
  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close">
        <input type="text" className="form__input form__input--user" />
        <input
          type="password"
          maxLength={6}
          className="form__input form__input--pin"
        />
        <button className="form__btn form__btn--close">&rarr;</button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
      </form>
    </div>
  );
}

export default CloseAccount