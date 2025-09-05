const [swShowMenu, setSwShowMenu] = useState(false);

const handleSwShowMenu = () => setSwShowMenu(!swShowMenu);

return (
  <ThemeContext.Provider value={{ swShowMenu, handleSwShowMenu }}>
    {children}
  </ThemeContext.Provider>
);
