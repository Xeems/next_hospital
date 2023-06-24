import NavBar from "@/components/NavBar";

type NavLink ={
    Name: string;
    href: string;
};

const links: NavLink[] = [
    {Name: "Записи", href: "/patient/services"},
    {Name: "Приемы", href: "/patient/appointments"}
]

export const metadata = {
    title: 'Next hospital',
    description: 'Generated by create next app',
  }
  

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <NavBar links={links}></NavBar> 
        <body>{children}</body>
      </>
    )
  }