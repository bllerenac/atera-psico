import Layout from "../../components/Layout"
import BasicHero from "../../components/Hero"
import home_bg from "../../assets/images/Backgrounds/351-1920x650.jpg"
import BasicBanner from "../../components/Banner/Basic"

const Home = () => {
  return (
    <Layout hero={<BasicHero image={home_bg} />}>
      <div className="Home">
        <BasicBanner
          title="Banner Title Test"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image="https://fastly.picsum.photos/id/225/400/350.jpg?hmac=LO6v0flkSaCXhxbQPbJ_NRW7hAPPTJH1agON5F7EPO8"
          bgImage="https://fastly.picsum.photos/id/726/1920/400.jpg?hmac=TTggynqDrDBCFlfPkodnArnMmzv5sliAV3wNBJrF-Is"
          fullWidth={false}
        />
      </div>
    </Layout>
  )
}

export default Home