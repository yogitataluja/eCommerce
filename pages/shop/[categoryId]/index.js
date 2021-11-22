
import Shop from "../../../components/Shop/Shop";

const index = ({ categoryId }) => {
  return (<>
  <Shop categoryId={categoryId} />
  </>
    
  );
};

export default index;

export async function getServerSideProps(context) {
  const categoryId = context.params.categoryId;
  return {
    props: {
      categoryId,
    },
  };
}
