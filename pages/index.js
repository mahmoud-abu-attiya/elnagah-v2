import About from "@/components/About";
import VRP from "@/components/VRP"
import Event from '@/components/events'

export const config = {
   unstable_runtimeJS: true
};

export default function Home({ data }) {
   const { event = {}, latest_discounts = [],about_wsam_elngah = [], } = data;
   return (
      <main>
         <VRP data={latest_discounts} />
         <Event data={event} />
         <About data={about_wsam_elngah} />
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
