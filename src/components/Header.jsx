import { Container, Icon, Button } from "./index.js";

const Header = () => {
  const goToWyh = () => {
    console.log("go to wyh");
  };

  return (
    <div className="bg-white w-full">
      <Container medium>
        <div className="flex justify-between items-center h-24 mx-5">
          <Icon purpose="logo" width={150} />

          <Button purpose="orange" onClick={goToWyh}>
            Neden Paketus
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
