import { Container, Icon, Button } from "./index.js";

const Header = () => {
  return (
    <div className="bg-white w-full">
      <Container medium>
        <div className="flex justify-between items-center h-24 mx-5 other:mx-1">
          <Icon purpose="logo" width={150} />

          <Button purpose="orange" scrollMode toId="why-paketus">
            Neden Paketus
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
