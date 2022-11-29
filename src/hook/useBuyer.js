import { useEffect, useState } from 'react';

const useBuyer = email => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://pay-and-buy-server-anamulhassan.vercel.app/user/buyer/${email}`
      )
        .then(res => res.json())
        .then(result => {
          setIsBuyer(result?.isBuyer);
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};
export default useBuyer;
