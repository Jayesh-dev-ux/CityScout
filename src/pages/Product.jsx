import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About CityScout.</h2>
          <p>
            This project documents our travel experiences by listing cities
            we've visited and the restaurants we've enjoyed in each. It serves
            as a personal record and a practical guide for anyone interested in
            exploring diverse culinary options worldwide.
          </p>
          <p>
            By organizing thisinformation systematically, the project aims to
            offer insights into global dining cultures and inspire fellow
            travelers to discover new culinary delights.Through clear
            presentation and accessible data, it provides a valuable resource
            for both reminiscing about pasttravels and planning future culinary
            adventures.
          </p>
        </div>
      </section>
    </main>
  );
}
