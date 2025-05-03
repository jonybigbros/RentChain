import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PriceComparisonBar({ price1, price2 }) {
  const totalWidth = 260; // ширина всей полосы
  <PriceComparisonBar price1={450000} price2={400000} />


  // Преобразуем цены в числа и проверим, чтобы они были числами
  const price1Value = isNaN(price1) ? 0 : Number(price1);
  const price2Value = isNaN(price2) ? 0 : Number(price2);

  const minPrice = Math.min(price1Value, price2Value);
  const maxPrice = Math.max(price1Value, price2Value);

  const fillPercentage = 1 - minPrice / maxPrice;
  const fillWidth = totalWidth * (1 - fillPercentage);
  const isFirstCheaper = price1Value < price2Value;

  // Форматирование цены с пробелами для разделения тысяч
  
  const formatPrice = (price) => {
    if (price === 0) return '0 ₸';
    return price.toLocaleString('en-US') + ' ₸';
  };

  return (
    <View style={styles.container}>
      {/* Серый фон полосы */}
      <View style={[styles.barBackground, { width: totalWidth }]} />

      {/* Фиолетовая часть — более выгодная цена */}
      <View
        style={[
          styles.barFill,
          {
            width: fillWidth,
            left: isFirstCheaper ? 0 : totalWidth - fillWidth,
          },
        ]}
      />

      {/* Цены */}
      <Text
        style={[
          styles.text,
          { left: 15 },
          isFirstCheaper && styles.highlightedText,
        ]}
      >
        {formatPrice(price1Value)}
      </Text>
      <Text
        style={[
          styles.text,
          { right: 15 },
          !isFirstCheaper && styles.highlightedText,
        ]}
      >
        {formatPrice(price2Value)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 51,
    position: 'relative',
    marginTop: 20,
  },
  barBackground: {
    position: 'absolute',
    top: 16,
    height: 20,
    backgroundColor: '#e7e4e4',
    borderRadius: 5,
  },
  barFill: {
    position: 'absolute',
    top: 16,
    height: 20,
    backgroundColor: '#ce87f1',
    borderRadius: 5,
  },
  text: {
    position: 'absolute',
    top: 0,
    height: 51,
    lineHeight: 51,
    fontSize: 12,
    fontWeight: '600',
    color: '#151416',
  },
  highlightedText: {
    color: 'white',
  },
});

