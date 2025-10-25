import { Text, View } from "react-native";
import DashboardList from "../(component)/dashboard_list";

export default function Index() {
  return (
    <View className="flex-1 bg-white p-5">
      <View>
        <Text>Name</Text>
      </View>

      <View>
        <Text>Calender</Text>
      </View>

      <View className="gap-6">
        {/* Upcoming Doses Card */}
        <View className="bg-white shadow rounded-3xl p-4">
          <Text className="text-black text-xl font-bold mb-4">
            Upcoming Doses
          </Text>

          <View className="gap-6">
            <DashboardList />
            <DashboardList />
          </View>
        </View>

        {/* Completed Doses Card */}
        <View className="bg-white shadow rounded-3xl p-4">
          <Text className="text-black text-xl font-bold mb-4">
            Completed Doses
          </Text>

          <View className="gap-6">
            <DashboardList />
          </View>
        </View>

        {/* Missed Doses Card */}
        <View className="bg-white shadow rounded-3xl p-4">
          <Text className="text-black text-xl font-bold mb-4">
            Missed Doses
          </Text>

          <View className="gap-6">
            <DashboardList />
          </View>
        </View>
      </View>
    </View>
  );
}
