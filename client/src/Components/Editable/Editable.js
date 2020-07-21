import React, { useState, useEffect } from "react";

const Editable = ({ Ref, text, type, placeholder, children, ...props }) => {
  const [isEdited, setEdited] = useState(false);

  useEffect(() => {
    if (Ref && Ref.current && isEdited === true) {
      Ref.current.focus();
    }
  }, [isEdited, Ref]);

  const onKeyPress = (event, type) => {
    const { key } = event;
    const checkKeys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const Keys = [...checkKeys, enterKey];

    if (
      (type === "textarea" && checkKeys.indexOf(key) > -1) ||
      (type !== "textarea" && Keys.indexOf(key) > -1)
    ) {
      setEdited(false);
    }
  };

  return (
    <section {...props}>
      {isEdited ? (
        <div
          onBlur={() => setEdited(false)}
          onKeyDown={(e) => onKeyPress(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEdited(true)}>
          <span>{text || placeholder || "Edit Field"}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
