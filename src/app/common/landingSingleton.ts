export default class LandingSingleton {
  private static instance: LandingSingleton;
  isLanding: boolean;

  /**
   * The landingSingleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    const url: string = window.location.href;
    const currentTab: string = url.split('/').pop();
    this.isLanding = currentTab === 'landing' || currentTab === 'resume';
   }

  /**
   * The static method that controls the access to the landingSingleton instance.
   *
   * This implementation let you subclass the landingSingleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): LandingSingleton {
      if (!LandingSingleton.instance) {
        LandingSingleton.instance = new LandingSingleton();
      }

      return LandingSingleton.instance;
  }

}
