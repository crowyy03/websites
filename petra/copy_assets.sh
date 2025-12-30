#!/bin/bash
SRC_DIR="/Users/Voronin/Desktop/work/websites/petra/info/Petra, ресторан, Кожевенная линия, 40, Санкт-Петербург — Яндекс Карты_files"
DEST_DIR="public/assets"

# Copy interior and food images (prioritize interior)
# First 9 images - mostly interior
cp "$SRC_DIR/XXXL(8)" "$DEST_DIR/interior_1.jpg"
cp "$SRC_DIR/XXXL(37)" "$DEST_DIR/interior_2.jpg"
cp "$SRC_DIR/XXXL(28)" "$DEST_DIR/interior_3.jpg"
cp "$SRC_DIR/XXXL(22)" "$DEST_DIR/interior_4.jpg"
cp "$SRC_DIR/XXXL(11)" "$DEST_DIR/interior_5.jpg"
cp "$SRC_DIR/XXXL(16)" "$DEST_DIR/interior_6.jpg"
cp "$SRC_DIR/XXXL(15)" "$DEST_DIR/interior_7.jpg"
cp "$SRC_DIR/XXXL(30)" "$DEST_DIR/interior_8.jpg"
cp "$SRC_DIR/XXXL(7)" "$DEST_DIR/interior_9.jpg"

# Next 9 images - mix of interior, food, and details
cp "$SRC_DIR/XXXL(21)" "$DEST_DIR/gallery_10.jpg"
cp "$SRC_DIR/XXXL(47)" "$DEST_DIR/gallery_11.jpg"
cp "$SRC_DIR/XXXL(4)" "$DEST_DIR/gallery_12.jpg"
cp "$SRC_DIR/XXXL(40)" "$DEST_DIR/gallery_13.jpg"
cp "$SRC_DIR/XXXL(26)" "$DEST_DIR/gallery_14.jpg"
cp "$SRC_DIR/XXXL(3)" "$DEST_DIR/gallery_15.jpg"
cp "$SRC_DIR/XXXL(43)" "$DEST_DIR/gallery_16.jpg"
cp "$SRC_DIR/XXXL(9)" "$DEST_DIR/gallery_17.jpg"
cp "$SRC_DIR/XXXL(25)" "$DEST_DIR/gallery_18.jpg"

# Food images
cp "$SRC_DIR/XXXL(46)" "$DEST_DIR/food_1.jpg"
cp "$SRC_DIR/XXXL(44)" "$DEST_DIR/food_2.jpg"
cp "$SRC_DIR/XXXL(42)" "$DEST_DIR/food_3.jpg"

# Details
cp "$SRC_DIR/XXXL(22)" "$DEST_DIR/detail_1.jpg"
cp "$SRC_DIR/XXXL(11)" "$DEST_DIR/detail_2.jpg"

# Logo/hero image (use one of the best interior shots)
cp "$SRC_DIR/XXXL(8)" "$DEST_DIR/hero_logo.jpg"

echo "Assets copied."
