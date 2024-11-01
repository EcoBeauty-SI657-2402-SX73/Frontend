import { Component ,OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddRecipesComponent} from "../add-recipes/add-recipes.component";
import {RecipesService } from 'src/app/core/services/recipes.service';
import { RecipeModel } from 'src/app/core/models/recipe.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {
  Allrecipes: RecipeModel[] = [];

  constructor(private _dialog: MatDialog, private _recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.getFakeRecipes();
  }

  openAddRecipe() {
    this._dialog.open(AddRecipesComponent);
  }

  getAllRecipes(){
    this._recipesService.getListRecipes().subscribe((data: any)=>{
      this.Allrecipes = data;
      console.log(this.Allrecipes);
    })
  }

  onRecipeClick(recipeId: string): void {
    this.router.navigate(['/recipe-detail', recipeId]);
  }

  getFakeRecipes() {
    this.Allrecipes = [
      { id: 1, image: "https://cdn.shopify.com/s/files/1/2971/2126/files/lip_balm_1024x1024.jpg?v=1591736857", name: 'Homemade Lip Balm', description: 'A natural lip balm made with beeswax, coconut oil, and essential oils.', steps: ['Melt beeswax and coconut oil', 'Add essential oils', 'Pour into containers', 'Let cool'] },
      { id: 2, image: "https://www.wayspa.com/wp-content/uploads/2022/11/cucumber-face-mask.png", name: 'DIY Face Mask', description: 'A soothing face mask made with honey, yogurt, and oatmeal.', steps: ['Mix honey, yogurt, and oatmeal', 'Apply to face', 'Leave for 15 minutes', 'Rinse off'] },
      { id: 3, image: "https://naghab.com/wp-content/uploads/2021/09/Shampoo-Golden-Berry-1.jpg", name: 'Natural Shampoo', description: 'A gentle shampoo made with castile soap, coconut milk, and essential oils.', steps: ['Mix castile soap, coconut milk, and essential oils', 'Use as regular shampoo'] },
      { id: 4, image: "https://draxe.com/wp-content/uploads/2016/01/BodyScrubThumbnail.jpg", name: 'Homemade Body Scrub', description: 'An exfoliating body scrub made with sugar, coconut oil, and vanilla extract.', steps: ['Mix sugar, coconut oil, and vanilla extract', 'Use to scrub body', 'Rinse off'] },
      { id: 5, image: "https://www.treehugger.com/thmb/GdS3Mk2sk2qCHIeXYryan4POysU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/making-homemade-deodorant-stick-with-all-natural-ingredients-concept--blue-wooden-background--ingredients--arrowroot-powder--baking-soda--beeswax--shea-butter--essential-oil--cornstarch--coconut-oil--1307745012-3e37460ecc6a4fc6bd5facf92d1b2395.jpg", name: 'DIY Deodorant', description: 'A natural deodorant made with baking soda, coconut oil, and essential oils.', steps: ['Mix baking soda, coconut oil, and essential oils', 'Apply to underarms'] },
      { id: 6, image: "https://cdn.shopify.com/s/files/1/0506/7037/0997/files/TradMed_Embed_April_Bath_1.jpg?v=1673398513", name: 'Herbal Bath Soak', description: 'A relaxing bath soak made with dried herbs and essential oils.', steps: ['Mix dried herbs and essential oils', 'Add to bath water', 'Soak and relax'] },
      { id: 7, image: "https://pyxis.nymag.com/v1/imgs/cc6/294/906f10f58bc4d2b935f623edd0d2ff27d0-28-hello-natural-toothpaste.rsquare.w400.jpg", name: 'Natural Toothpaste', description: 'A homemade toothpaste made with baking soda, coconut oil, and peppermint oil.', steps: ['Mix baking soda, coconut oil, and peppermint oil', 'Store in a jar', 'Use as regular toothpaste'] },
      { id: 8, image: "https://www.withlovekacie.com/wp-content/uploads/2020/03/15-4907-post/IMG_4345.jpg", name: 'DIY Hand Sanitizer', description: 'A natural hand sanitizer made with aloe vera gel and essential oils.', steps: ['Mix aloe vera gel and essential oils', 'Pour into a bottle', 'Use as needed'] },
      { id: 9, image: "https://beautyinthecrumbs.com/wp-content/uploads/2020/02/Homemade-Lotion-Easy-1-720x720.jpg", name: 'Homemade Lotion', description: 'A moisturizing lotion made with shea butter, coconut oil, and essential oils.', steps: ['Melt shea butter and coconut oil', 'Add essential oils', 'Pour into a container', 'Let cool'] },
      { id: 10, image: "https://m.media-amazon.com/images/I/51NneuK7MuL._SL1500_.jpg", name: 'Natural Sunscreen', description: 'A homemade sunscreen made with zinc oxide, coconut oil, and shea butter.', steps: ['Mix zinc oxide, coconut oil, and shea butter', 'Store in a jar', 'Apply as needed'] },
      { id: 11, image: "https://theviewfromgreatisland.com/wp-content/uploads/2011/11/homemade-lip-scrub-1.jpg", name: 'DIY Lip Scrub', description: 'An exfoliating lip scrub made with sugar, honey, and coconut oil.', steps: ['Mix sugar, honey, and coconut oil', 'Apply to lips', 'Rinse off'] },
      { id: 12, image: "https://hips.hearstapps.com/hmg-prod/images/hair-mask-1643991542.jpg", name: 'Homemade Hair Mask', description: 'A nourishing hair mask made with avocado, honey, and olive oil.', steps: ['Mix avocado, honey, and olive oil', 'Apply to hair', 'Leave for 30 minutes', 'Rinse off'] },
      { id: 13, image: "https://cdn.shopify.com/s/files/1/0534/3559/6954/files/14._Handmade_Organic_Toner_for_Dry_Skin_480x480.jpg?v=1692596703", name: 'Natural Face Toner', description: 'A refreshing face toner made with witch hazel and rose water.', steps: ['Mix witch hazel and rose water', 'Store in a spray bottle', 'Use as needed'] },
      { id: 14, image: "https://www.ouroilyhouse.com/wp-content/uploads/2024/07/best-foot-scrub-to-remove-dead-skin-finals-2.jpg", name: 'DIY Foot Scrub', description: 'An exfoliating foot scrub made with sea salt, coconut oil, and peppermint oil.', steps: ['Mix sea salt, coconut oil, and peppermint oil', 'Use to scrub feet', 'Rinse off'] },
      { id: 15, image: "https://thecrunchyginger.com/wp-content/uploads/2019/11/Homemade-Whipped-Body-Butter-Product-1024x766.jpg", name: 'Homemade Body Butter', description: 'A rich body butter made with shea butter, cocoa butter, and coconut oil.', steps: ['Melt shea butter, cocoa butter, and coconut oil', 'Whip until fluffy', 'Store in a jar', 'Use as needed'] }
    ];
  }
}
