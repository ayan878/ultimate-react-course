import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function App() {
  return <Accordion data={faqs} />;
}
const Accordion = ({ data }) => {
  debugger;
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={el.title}
          num={i + 1}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        currentOpen={currentOpen}
        onOpen={setCurrentOpen}
        title={"Custom one"}
        num={22}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};
const AccordionItem = ({title, num, currentOpen, onOpen,children}) => {
  const isOpen = num === currentOpen;
  const handleToggle = () => {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen?null:num);
  };
  // const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};
