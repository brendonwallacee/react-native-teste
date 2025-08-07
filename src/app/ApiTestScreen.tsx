import { View, Text, ActivityIndicator } from "react-native";
import { useFakeApi } from "@/hooks/useFakeApi";
import { Button } from "@/components/Button";

export function ApiTestScreen() {
    const { status, data, error, refetch, isFetching } = useFakeApi();

    const renderContent = () => {
        if (isFetching) {
            return <ActivityIndicator size="large" color="#3ECF8F" />;
        }

        if (status === 'error') {
            return (
                <View className="items-center p-8 bg-card dark:bg-dark-card rounded-lg w-full">
                    <Text className="text-2xl text-destructive dark:text-dark-destructive mb-2">Falha na Conexão</Text>
                    <Text className="text-lg text-muted dark:text-dark-muted mb-6 text-center">
                        {error ? error.message : "Não foi possível buscar os dados."}
                    </Text>
                    <Button label="Tentar Novamente" onPress={() => refetch()} variant="secondary" />
                </View>
            );
        }

        return (
            <View className="items-center p-8 bg-card dark:bg-dark-card rounded-lg w-full">
                <Text className="text-5xl mb-4 p-2">🎉</Text>
                <Text className="text-2xl text-text dark:text-dark-text mb-6 text-center">
                    {data ? data.message : "Toque para carregar os dados."}
                </Text>
                <Button
                    label={data ? "Buscar Novamente" : "Buscar Dados da API"}
                    onPress={() => refetch()}
                    variant="default"
                    size="lg"
                />
            </View>
        );
    };

    return (
        <View className="flex-1 items-center justify-center bg-background dark:bg-dark-background p-4">
            <View className="w-full max-w-sm">
                {renderContent()}
            </View>
        </View>
    );
}
