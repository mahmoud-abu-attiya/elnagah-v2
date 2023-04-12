import Hero from "@/components/Hero";

export const config = {
   unstable_runtimeJS: false
};

export default function Home({ data }) {
   const { slides = [] } = data;
   return (
      <main>
         <Hero data={slides} />
      </main>
   );
}

export async function getServerSideProps() {
   const [mainRes, programsRes] = await Promise.all([
      fetch("https://backend.elnagahtravels.com/public/api/index").then((res) =>
         res.json()
      ),
      fetch(
         "https://backend.elnagahtravels.com/public/api/countries?country_for=programs"
      ).then((res) => res.json()),
   ]);

   const data = mainRes;
   const programsCountries = programsRes.countries;

   return { props: { data, programsCountries } };
}
