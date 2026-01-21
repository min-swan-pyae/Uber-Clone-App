import { FlatList, Text, View } from "react-native";
import React from "react";
import RideLayout from "@/components/RideLayout";
import DriverCard from "@/components/DriverCard";
import { useDriverStore } from "@/store";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  return (
    <RideLayout title="Choose a driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            item={item}
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(Number(item.id)!)}
          />
        )}
      />
    </RideLayout>
  );
};
export default ConfirmRide;
