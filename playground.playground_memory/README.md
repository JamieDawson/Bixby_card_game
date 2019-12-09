# Quiz Capsule

Welcome to your Quiz capsule!  The next steps you should take are:

1. Add training examples. You might want to add additional training examples for searching multiple quizzes.

2. Update your quiz questions and answers by editing the `code/data/quizzes.js` file.

3. Have fun!

# Try it out

[Use the simulator](https://bixbydevelopers.com/dev/docs/dev-guide/developers/ide.simulator) to run the following:

`[g:StartQuiz] start quiz`

## Customize Your Capsule

You can edit dialog statements in the `resources/en/dialog/` folder and the `macros/` subfolder. This could let you customize dialog to give your quiz a more specific branding or personality. [Dialog](https://bixbydevelopers.com/dev/docs/dev-guide/developers/refining-dialog) you write should match our [Writing Dialog Design Guide](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides/writing).

Views are stored in `resources/base/views/`. If you'd like to [update the existing views](https://bixbydevelopers.com/dev/docs/dev-guide/developers/building-views), read the [Designing Your Capsule guide](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides/service).

The training for this capsule is very simple: a handful of utterances that can be used to start a quiz (with and without an initial search term), and one utterance used at the answer prompt which is simply the answer concept itself. Depending on your quiz, you might want to add new training.

If you are not linking to images hosted externally, the local images must be in your `assets/images` folder. You can sort these images into further subfolders, if necessary.

The capsule could be designed to fetch the JSON array for the quiz questions and answers from an external [web service](https://bixbydevelopers.com/dev/docs/dev-guide/developers/actions.js-actions#calling-web-services) rather than reading the `quizzes.js` file. To do this, you'll need to modify the `code/FindQuiz.js` file to call the external API.

## Submitting Your Capsule to the Marketplace

Learn about submitting your capsule to the [Marketplace](https://bixbydevelopers.com/dev/docs/dev-guide/developers/deploying.can-submission#about-the-marketplace)

---

## Additional Resources

### Your Source for Everything Bixby

* [Bixby Developer Center](https://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices

* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides

* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?

* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
