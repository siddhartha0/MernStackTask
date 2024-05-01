import BottomPart from "./BottomPart";
import MiddlePart from "./MiddlePart";
import TeamMembers from "./TeamMembers";
import TopPart from "./TopPart";

function Body() {
  return (
    <div className="flex flex-col">
      <TopPart />
      <MiddlePart />
      <TeamMembers />
      <BottomPart />
    </div>
  );
}

export default Body;
