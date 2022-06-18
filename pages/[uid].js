

const UserIdPage = (props) => {
  return (
    <div>UserIdPage</div>
  )
}

export default UserIdPage

export async function getServerSideProps(context){
    const {params} = context;

    const userId = params.uid;

    return {
        props: {
            id: 'userid-' + userId
        }
    }
}