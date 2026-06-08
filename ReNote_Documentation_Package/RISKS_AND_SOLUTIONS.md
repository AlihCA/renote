# RISKS_AND_SOLUTIONS.md

## Risk Register

| Risk | Concern | Mitigation |
| --- | --- | --- |
| Scope creep | Too many features may delay development. | Use MVP/Second Wave/Future separation; avoid adding MVP features. |
| AI cost/abuse | Users may overuse summarizer. | Login required, file size limits, cache summaries, usage tracking/future quotas. |
| Copyright/library content | Uploaded books/resources may be copyrighted. | Use approved, public domain, OER, or institution-owned resources; add upload responsibility statement. |
| Misinformation | Users can publish low-quality resources. | Use trust labels, uploader identity, citations, report/moderation as future. |
| Verification limitation | No real university identity integration. | Manual Faculty/Institution role assignment in MVP; future institutional email/ORCID/admin approval. |
| Access control bugs | Unauthorized users may see private content. | Backend permission checks on all protected routes; test visibility cases. |
| Storage growth | Files consume storage. | 20MB limit, archive, future quotas/cold storage. |
| AI accuracy | Summaries can be incomplete. | Original file remains accessible; summaries are study aids; users can refine/regenerate. |
| Search limitations | No full document search in MVP. | Document content search listed as Second Wave. |

## Scope and Limitation Note

Faculty and Institution verification is manually configured in the MVP to demonstrate the trust-label framework. In a real-world deployment, verification may use institutional email verification, administrative approval, or ORCID integration.
