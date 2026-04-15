<p align="center">
	<img src="assets/icon_2x.png" alt="fáma logo" width="64" />
</p>

Curated predefined feed sources for the fáma app

## Contributing

Thanks for helping improve the source catalog.

### How to add a source with a Pull Request

1. Fork this repository.
2. Create a branch, for example: `add-source-example-news`.
3. Edit `sources.json` and add a new object to the `sources` array.
4. Keep the JSON valid and preserve the existing field structure.
5. Open a Pull Request and fill in the PR template.

### Source entry format

Each source must include these fields:

```json
{
	"name": "Example News",
	"description": "short description",
	"url": "https://example.com/rss",
	"site_url": "https://example.com",
	"language": "en",
	"country": "US",
	"category": "general",
	"genre": "general"
}
```

### Submission checklist

- `url` is a direct RSS/Atom feed URL.
- Feed is public and does not require login.
- `site_url` points to the publisher homepage.
- `language` is an ISO 639-1 code (for example `hu`, `en`).
- `country` is an ISO 3166-1 alpha-2 code (for example `HU`, `GB`).
- `category` and `genre` are consistent with existing values.
- JSON formatting remains valid.

## Templates

This repo includes GitHub templates to make contributions easier:

- Pull request templates:
	- `.github/PULL_REQUEST_TEMPLATE.md` (default)
	- `.github/PULL_REQUEST_TEMPLATE/add-source.md` (source-focused)
- Issue templates:
	- `.github/ISSUE_TEMPLATE/source_request.yml`
	- `.github/ISSUE_TEMPLATE/bug_report.yml`

Use them to provide complete context and speed up review.
