import type { CharacterDetailProps } from "./typings";

export const CharacterDetails = ({
  characterData,
}: {
  characterData: CharacterDetailProps;
}) => {
  return (
    <>
      <div className="flex flex-row justify-around p-8">
        <img
          src={characterData?.image}
          alt={characterData?.image}
          height={400}
          width={400}
        ></img>
        <div className=" flex flex-col justify-center">
          {characterData?.name && (
            <p className="font-bold text-xl">Name : {characterData?.name}</p>
          )}
          <p className="font-bold text-lg">
            Species : {characterData?.species}
          </p>
          {characterData?.location?.name && (
            <p className="font-bold">
              Lives in {characterData?.location?.name}
            </p>
          )}
          <p className="font-bold">{characterData?.status}</p>
        </div>
      </div>
    </>
  );
};
