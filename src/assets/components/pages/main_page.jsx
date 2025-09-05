import PresentationMolecule from "../molecules/presentation_molecules";
import ExtraInformationOrganisms from "../organisms/extra_information";
import NavBar from "../organisms/nav_bar";

function MainPage() {
  return (
    <div className="main_page">
      <NavBar />
      <PresentationMolecule />
      <ExtraInformationOrganisms />
    </div>
  );
}

export default MainPage;
