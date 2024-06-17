
 colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        desert: "#E1C8B2",
        persianOrange: "#EE924F",
        fawn: "#F1AF7F",
        caribbean: "#2A6573",
        champagne: "#F9E7DD",
        snow:"#FFF7F5",
        darkPurple: "#27182D",
 }

 <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="montserrat bg-desert w-full min-h-screen">Home</main>
      <NavBar />
    </>

    const montserrat = Montserrat(
  { subsets: ["latin"],
  variable: "--font-mont",
 });

 .montserrat {
    font-family: var(--font-mont);
}
