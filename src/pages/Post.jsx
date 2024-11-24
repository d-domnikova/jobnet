import Review from "src/components/Review.jsx";

export default function Post() {


    return (
        <center>
            <div style={{marginTop: '200px', marginBottom: '200px', justifyContent: "center"}}>
                <Review name={"Surname Name"}
                        rating={2.5}
                        comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur. "}/>
            </div>
        </center>
    );
}
