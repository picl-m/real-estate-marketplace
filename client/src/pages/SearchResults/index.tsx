import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { EstateType } from "../Search";
import Layout from "../../components/Layout";

interface HomePageProps {
    estateType: EstateType;
}

export default function SearchResults(props: HomePageProps) {
    //const [currentSearchParams] = useSearchParams();
    const [results, setResults] = useState();
    
    const getResults = async () => {
        try {
            const res = await fetch("https://express-form-server.vercel.app/search", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({}),
            });
            const data = await res.json();
            if (res.status === 200) {
                setResults(data);
            } else {
                console.log("Server error: " + data);
            }
        } catch (err) {
            let message = "Unknown error";
            if (err instanceof Error) message = err.message;
            console.log("Error getting search results: " + message);
        }
    }

    useEffect(() => {
        getResults();
    }, [])

    return (
        <Layout>
            <Container>
                {results}
            </Container>
        </Layout>
    )
}