import { useState } from "react";

export default function useMenuController() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return { open, toggleMenu };
}
