// code for individual image details page ]

import {Link, Text, Box} from "@chakra-ui/react";
import {baseURL, fetchAPI} from "../../utils/fetchAPI";

const CatDetails = ({
  catDetails: {
    id,
    url,
    breeds: [{name, origin, wikipedia_url, temperament}],
  },
}) => {
  return (
    <>
      <div className="container cat-details-container">
        <Box
          textAlign="center"
          fontFamily="Montserrat"
          fontStyle="sans-serif"
          fontWeight="600"
          fontSize="18px"
          paddingBottom="5"
        >
          Showing details for a {name} breed cat !
        </Box>
        <div className="details-image">
          <center>
            <img src={url ? url : DefaultImage} width={400} height={260} />
          </center>
        </div>
        <div className="details">
          <div className="detail">
            <p> ID : {id ? id : <Text>Id is not provided !</Text>}</p>
          </div>
          <div className="detail">
            <p>
              {" "}
              Name Of Breed :{" "}
              {name ? name : <Text>Name is not provided !</Text>}
            </p>
          </div>
          <div className="detail">
            <p>
              {" "}
              Country Of Origin :{" "}
              {origin ? (
                origin
              ) : (
                <Text>Country of origin is not provided !</Text>
              )}
            </p>
          </div>
          <div className="detail">
            <p>
              Cat's Temperament :{" "}
              {temperament ? (
                temperament
              ) : (
                <Text>Cat's temperament is not provided !</Text>
              )}
            </p>
          </div>
          <div className="detail">
            <p>
              {" "}
              Wikipedia Link :{" "}
              {wikipedia_url ? (
                <Link href={wikipedia_url}>Click Here To Know More</Link>
              ) : (
                <Text>No wikipedia links provided !</Text>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatDetails;
export async function getServerSideProps({params: {id}}) {
  // fetching an individual image
  const data = await fetchAPI(`${baseURL}/images/${id}`);
  return {
    props: {
      catDetails: data,
    },
  };
}
