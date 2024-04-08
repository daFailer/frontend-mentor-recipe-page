<template>
    <Introduction />
    <Preparation />
    <ContentArea
        :headline="'Ingredients'"
    >
        <ul :class="$style.list">
            <li>
                <p>
                    2-3 large eggs
                </p>
            </li>
            <li>
                <p>
                    Salt, to taste
                </p>
            </li>
            <li>
                <p>
                    Pepper, to taste
                </p>
            </li>
            <li>
                <p>
                    1 tablespoon of butter or oil
                </p>
            </li>
            <li>
                <p>
                    Optional fillings: cheese, diced vegetables, cooked meats, herbs
                </p>
            </li>
        </ul>
    </ContentArea>
    <ContentArea
        :headline="'Instructions'"
    >
        <ol>
            <li>
                <p>
                    <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                </p>
            </li>
            <li>
                <p>
                    <strong>Heat the pan</strong>: Place a non-stick frying pan over medium heat and add butter or oil.
                </p>
            </li>
            <li>
                <p>
                    <strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                </p>
            </li>
            <li>
                <p>
                    <strong>Add fillings (optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                </p>
            </li>
            <li>
                <p>
                    <strong>Fold and serve</strong>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                </p>
            </li>
            <li>
                <p>
                    <strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.
                </p>
            </li>
        </ol>
    </ContentArea>
    <ContentArea
        :headline="'Nutrition'"
    >
        <p>
            The table below shows nutritional values per serving without the additional fillings.
        </p>
        <table>
            <tr>
                <th>Calories</th>
                <td>277kcal</td>
            </tr>
            <tr>
                <th>Carbs</th>
                <td>0g</td>
            </tr>
            <tr>
                <th>Protein</th>
                <td>20g</td>
            </tr>
            <tr>
                <th>Fat</th>
                <td>22g</td>
            </tr>
        </table>
    </ContentArea>
</template>

<script lang="ts" src="./App.ts" />

<style lang="scss" module>
.App {
    
}
</style>
