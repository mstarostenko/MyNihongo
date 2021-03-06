

const Command = use('Command');
const Config = use('Config');
const { Nuxt, Builder } = require('nuxt');

class NuxtBuild extends Command {
    /**
   * signature defines the requirements and name
   * of command.
   *
   * @return {String}
   */
    get signature () {
        return 'nuxtbuild';
    }

    /**
   * description is the little helpful information displayed
   * on the console.
   *
   * @return {String}
   */
    get description () {
        return 'Build for production the nuxt.js application.';
    }

    /**
   * handle method is invoked automatically by ace, once your
   * command has been executed.
   *
   * @param  {Object} args    [description]
   * @param  {Object} options [description]
   */
    * handle (args, options) {
        const config = Config.get('nuxt');
        config.dev = false;
        this.nuxt = new Nuxt(config);
        this.info('Building nuxt.js application...');
        yield new Builder(this.nuxt).build();
    }
}

module.exports = NuxtBuild;
