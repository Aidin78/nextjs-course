"use client";

export default function ErrorPage({ error }) {
    return (
        <>
            <h3>An error occured!</h3>
            <p>{error.message}</p>
        </>
    )
}