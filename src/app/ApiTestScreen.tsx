import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useFakeApi } from "@/hooks/useFakeApi";

export function ApiTestScreen() {
    // Agora também pegamos o `isFetching`
    const { status, data, error, refetch, isFetching } = useFakeApi();

    const handleFetch = () => {
        // Não precisamos verificar se já está buscando, o TanStack Query cuida disso.
        refetch();
    };

    const renderContent = () => {
        // 1. Mostra o loading APENAS se uma busca estiver em andamento.
        if (isFetching) {
            return <ActivityIndicator size="large" color="#ffffff" />;
        }

        // 2. Trata o erro. Agora verificamos se `error` existe antes de acessá-lo.
        if (status === 'error') {
            return (
                <View className="items-center">
                    <Text className="text-xl text-red-400 mb-2">Erro!</Text>
                    <Text className="text-lg text-white mb-4 text-center">
                        {error ? error.message : "Ocorreu um erro desconhecido."}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={handleFetch}>
                        <Text style={styles.buttonText}>Tentar Novamente</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        // 3. Estado de sucesso ou inicial (idle).
        // Como o loading é tratado primeiro, não precisamos mais nos preocupar com o estado `pending`.
        return (
            <View className="items-center">
                {data && (
                    <Text className="text-2xl text-white mb-4 text-center">
                        {data.message}
                    </Text>
                )}

                <TouchableOpacity style={styles.button} onPress={handleFetch}>
                    <Text style={styles.buttonText}>
                        {data ? "Buscar Novamente" : "Buscar Dados da API"}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View className="flex-1 items-center justify-center bg-gray-500">
            <View style={styles.container}>
                {renderContent()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 320,
        backgroundColor: '#14532d',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    button: {
        backgroundColor: '#15803d',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
