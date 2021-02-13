import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { Item } from "./Item";
import { List } from "./List";
import "./style.css";
import useScrollLock from "../../hooks/scrollLock";

function Store({ match }) {
  const scrollLock = useScrollLock();

  const [click, setClick] = useState();

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    click && scrollLock.lock();
    !click && scrollLock.unlock();
  }, [click]);

  let { id } = match.params;
  const imageHasLoaded = true;

  useEffect(() => {
    if ("#/aaronDiggdon/" + id === window.location.hash) {
      setClick(true);
    }
  }, []);
  return (
    <AnimateSharedLayout type="crossfade">
      <List selectedId={id} handleClick={handleClick} click={click}/>
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Item id={id} key="item" handleClick={handleClick} />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
export default Store;
