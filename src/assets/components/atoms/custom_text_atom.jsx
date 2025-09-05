function CustomTextAtom({ text, routeImg = null, classChoose }) {
  return (
    <div className={classChoose}>
      {routeImg ? <img src={routeImg} alt="imagen de icono" /> : ""}
      <p>{text}</p>
    </div>
  );
}

export default CustomTextAtom;
