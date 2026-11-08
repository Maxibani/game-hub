import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError, isAxiosError, type AxiosRequestConfig } from "axios";



interface FetchResponse <T>{
    count: number;
    results: T[];
}

const useData =<T> (endpoint:string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) =>{
   const [data, setData] = useState<T[]>([]);
        const [error , setError] = useState('');
        const [isLoading, setLoading] =useState(false);
    
        useEffect(() => {

            const controller = new AbortController();

                   // eslint-disable-next-line react-hooks/set-state-in-effect
                   setLoading(true);
                   setError('');
            apiClient.get<FetchResponse <T>>(endpoint,{...requestConfig, signal:controller.signal})
            
        .then((res) => {
            setData(res.data.results);
            setLoading(false)
            
            })

                .catch((err) =>{
                    if (err instanceof CanceledError ) return;
                    if (isAxiosError(err)) {
                        setError(
                            err.response
                                ? `Request failed with status ${err.response.status}.`
                                : `Network error: ${err.message}. Check your connection and API settings.`,
                        );
                    } else {
                        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
                    }
                    setLoading(false);
        });

                return () => controller.abort();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint,  ...(deps ?? []) ]);

return {data, error,isLoading};
}

export default useData;