const { PUBLIC_URL } = process.env;

function PublicSidebar() {
  return (
    <div className="login-sidebar">
      <div className="login-sidebar-inner">
        <img src={`${PUBLIC_URL}/images/box-icon.png`} alt="" />
        <h2>A platform built for companies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur rat nunc adipiscing condimentum
          eget est platea feugiat amet egestas.
        </p>
      </div>
    </div>
  );
}

export default PublicSidebar;
