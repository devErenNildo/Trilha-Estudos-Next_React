"use client"
import Link from "next/link";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"}
]

const AuthLayout = ({children}: {
    children: React.ReactNode
}) => {
    return(
        <>
            {
                navLinks.map((link) => {
                    return(
                        <Link href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    );
                })
            }
            {children}
        </>
    );
}

export default AuthLayout;
