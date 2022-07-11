import React, { useState } from "react";
import { Home } from "./relatorioADROC";
import { Serie } from "./Serie";

interface Account {
  account_id: number;
  account_code: string;
  methods: [{
    method: string,
    type: string,
  }];
  short_token: string;
}

export const Main = () => {
  const [pageSerie, setPageSerie] = useState(false);
  const [serieId, setSerieId] = useState<string>('');
  const [seriePhoto, setSeriePhoto] = useState<string>('');

  return (
    <>
          {pageSerie ? <Serie pageSerie={setPageSerie} serieId={serieId} seriePhoto={seriePhoto}/> : <Home  pageSerie={setPageSerie} serieId={setSerieId} seriePhoto={setSeriePhoto} />}
    </>
  );
};


