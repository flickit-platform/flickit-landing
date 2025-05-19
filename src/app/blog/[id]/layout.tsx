
export const metadata = {
    title: "Article",
    description: "Assessment platform",
};
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
 <>
     {children}
 </>
    );
}
