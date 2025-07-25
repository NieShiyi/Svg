import { useState, useEffect, useMemo } from "react";
import "./index.css";

const Tabs = (props) => {
  const { items, onChange, defaultActiveKey } = props;
  const [key, setKey] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    if (!items.length) {
      console.log("items参数格式错误！");
    }
    if (defaultActiveKey) {
      let curContent = items.find(
        (item) => item.key === defaultActiveKey
      )?.children;
      if (curContent) {
        setKey(defaultActiveKey);
        setContent(curContent);
        return;
      }
    }
    setKey(items[0]?.key);
    setContent(items[0]?.children);
  }, [items, defaultActiveKey]);

  useEffect(() => {
    onChange?.(key);
  }, [key]);

  const onItemClick = (item) => {
    setKey(item.key);
    setContent(item.children);
  };

  return (
    <div className="tabs">
      <ul className="items">
        {items.map((item) => (
          <li
            className={`item ${key == item.key ? "active" : ""}`}
            onClick={() => onItemClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="content">{content}</div>
    </div>
  );
};

export default Tabs;
