import MainContentItem from "../maincontentitem/MainContentItem";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="MainContent">
      <MainContentItem title="Cool cat" text="Some text about Cool cat" image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"/>
      <MainContentItem title="Oreo" text="Some text" image="https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/DCTM_Penguin_UK_DK_AL697473_RGB_PNG_namnse.jpg"/>
      <MainContentItem title="Lukum" text="Other text about Lukum" image="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"/>
    </div>
  );
};

export default MainContent;
