import { useQuery } from '@tanstack/react-query';

/**
 * Função que simula uma chamada de API.
 * Ela espera 2 segundos e então resolve ou rejeita a Promise aleatoriamente.
 */
function fakeApiCall(): Promise<{ message: string }> {
    console.log("Fazendo chamada à API...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                console.log("API retornou um erro.");
                reject(new Error("Falha na conexão com a API."));
            } else {
                const successMessage = `Dados carregados com sucesso às ${new Date().toLocaleTimeString()}`;
                console.log("API retornou sucesso.");
                resolve({ message: successMessage });
            }
        }, 2000);
    });
}

export function useFakeApi() {
    const {
        status, // 'pending', 'error', 'success'
        data,
        error,
        refetch, // Função para forçar a re-busca dos dados
        isFetching, // true quando a queryFn está em execução
    } = useQuery({
        queryKey: ['apiData'], // Chave única para esta query. Essencial para o cache.
        queryFn: fakeApiCall, // Função que busca os dados.
        enabled: false, // Impede que a query seja executada automaticamente na montagem.
    });

    return { status, data, error, refetch, isFetching };
}
